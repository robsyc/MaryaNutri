<!-- CountUp.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { Tween } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    // import { fade } from 'svelte/transition';
  
    export let target: number = 0;        // The target number to count up to
    export let duration: number = 1000;   // Duration of the counting animation
    export let start: number = 0;         // Starting number
    export let decimals: number = 0;      // Number of decimal places
    export let suffix: string = '';       // Suffix to append (e.g., '%')
  
    let count = new Tween(start, { duration: 0 });
    let visible: boolean = false;
    let numberElement: HTMLElement;
  
    $: displayValue = count.current.toFixed(decimals) + suffix;
  
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
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