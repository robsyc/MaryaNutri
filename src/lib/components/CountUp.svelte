<!-- CountUp.svelte -->
<script>
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';
  
    export let target = 0;        // The target number to count up to
    export let duration = 1000;   // Duration of the counting animation
    export let start = 0;         // Starting number
    export let decimals = 0;      // Number of decimal places
    export let suffix = '';       // Suffix to append (e.g., '%')
  
    let count = tweened(start, { duration: 0 });
    let visible = false;
    let numberElement;
  
    $: displayValue = $count.toFixed(decimals) + suffix;
  
    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !visible) {
          visible = true;
          count.set(target, { duration, easing: cubicOut });
        }
      });
    }
  
    onMount(() => {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
      });
      observer.observe(numberElement);
  
      return () => {
        observer.disconnect();
      };
    });
</script>
  
<span bind:this={numberElement}>
    {displayValue}
</span>