<script>
    import Rect from './Rect.svelte';
    import { scaleLinear } from 'd3-scale';
  
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { interpolate } from 'd3-interpolate';

    // Props
    let {
        data = [], 
        labels = [], 
        yTicks = [], 
        yLabel = ''
    } = $props();

    // Dimensions
    const padding = { top: 20, right: 15, bottom: 20, left: 25 };
    let width = $state(500);
    let height = 350;
  
    let xScale = $derived(
    scaleLinear()
      .domain([0, data.length])
      .range([padding.left, width - padding.right])
    );

    let yScale = scaleLinear()
        .domain([0, Math.max.apply(null, yTicks)])
        .range([height - padding.bottom, padding.top]);

    let innerWidth = $derived(width - (padding.left + padding.right));
    let barWidth = $derived(innerWidth / data.length);
</script>
  
<div class="chart" bind:clientWidth={width}>
<svg {width} {height} class="bg-background">
    <!-- Bars -->
    <g class="bars">
        {#each data as { value, color }, i}
        <rect
            x={xScale(i) + 8}
            y={yScale(value)}
            width={barWidth * 0.8}
            height={yScale(0) - yScale(value)}
            fill={color || '#fcd34d'}
            stroke="none"
            />
        {/each}
        <!-- TODO add animation using Rect.svelte as non-svelte-5 inspiration -->
    </g>

    <!-- Y Axis -->
    <g class="axis y-axis text-xs">
        {#each yTicks as tick}
        <g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
            <line
            x2="100%"
            stroke="currentColor"
            class="text-accent-foreground/50"
            />
            <text
                x="1"
                y="-4"
                fill="currentColor"
                class="text-accent-foreground/80"
            >
            {tick} {tick === yTicks[yTicks.length - 1] ? yLabel : ''}
            </text>
          </g>
        {/each}
    </g>

    <!-- X Axis -->
    <g class="axis x-axis text-xs">
        {#each labels as label, i}
            <g class="tick" transform="translate({xScale(i)}, {height})">
            <text
              x={(barWidth * 0.8) / 2 + 8}
              y="-4"
              text-anchor="start"
              fill="currentColor"
              class="text-accent-foreground/80"
            >
              {label}
            </text>
          </g>
        {/each}
    </g>
</svg>
</div>

<style>
    .x-axis .tick text {
      text-anchor: middle;
    }
    .tick text {
      text-anchor: start;
    }
    .tick line {
      stroke-dasharray: 2;
    }
    .tick.tick-0 line {
      display: inline-block;
      stroke-dasharray: 0;
    }
</style>