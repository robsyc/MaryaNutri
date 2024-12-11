<script>
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { interpolate } from 'd3-interpolate';
  
    export let x;
    export let y;
    export let yScale;
    export let width;
    export let i;
    export let fill;
  
    const tY = tweened(0, {
      delay: i * 200,
      duration: 600,
      easing: cubicOut,
      interpolate,
    });
  
    $: tY.set(y);
</script>
  
<rect
    x={x}
    y={yScale($tY)}
    width={width}
    height={yScale(0) - yScale($tY)}
    fill={fill}
    stroke="none" />