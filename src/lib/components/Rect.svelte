<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { interpolate } from 'd3-interpolate';

    export let value;
    export let xScale;
    export let yScale;
    export let barWidth;
    export let color;
    export let i;
  
    const tY = tweened(0, {
      delay: i * 200,
      duration: 600,
      easing: cubicOut,
      interpolate,
    });
  
    $: tY.set(value);
</script>
  
<rect
    x={xScale(i) + 8}
    y={yScale($tY)}
    width={barWidth * 0.8}
    height={yScale(0) - yScale($tY)}
    fill={color || '#fcd34d'}
    stroke="none" />