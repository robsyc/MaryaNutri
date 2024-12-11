<script>
    import BarChart from '$lib/components/BarChart.svelte';
  
    const data = [
      { value: 22, color: '#ff4c4c' },
      { value: 20, color: '#ff7f00' },
      { value: 16, color: '#ffe700' },
      { value: 10, color: '#8cff00' },
      { value: 9, color: '#00ffff' },
    ];
    const yTicks = [0, 5, 10, 15, 20, 25];
    const labels = ['Cow', 'Pig', 'Chicken', 'Cricket', 'Mealworm'];
</script>

<div class="p-8 h-96 w-[50%]">
    <BarChart {data} {yTicks} {labels} yLabel="Litres (L)" />
</div>