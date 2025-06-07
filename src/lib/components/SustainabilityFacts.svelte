<script lang="ts">
    import BarChart from '$lib/components/BarChart.svelte';
    import Separator from '$lib/components/ui/separator/separator.svelte';

    // Chart data
    const chart_labels = ['Cow', 'Pig', 'Chicken', 'Cricket', 'Mealworm'];
    
    const water_data = [
        { value: 22000, color: '#ff4c4c' },
        { value: 20000, color: '#ff7f00' },
        { value: 16000, color: '#ffe700' },
        { value: 10, color: '#8cff00' },
        { value: 9, color: '#00ffff' },
    ];
    const water_yTicks = [0, 5000, 10000, 15000, 20000, 25000];
    
    const land_data = [
        { value: 200, color: '#ff4c4c' },
        { value: 180, color: '#ff7f00' },
        { value: 110, color: '#ffe700' },
        { value: 15, color: '#8cff00' },
        { value: 14, color: '#00ffff' },
    ];
    const land_yTicks = [0, 50, 100, 150, 200, 250];
    
    const co2_data = [
        { value: 14.8, color: '#ff4c4c' },
        { value: 3.8, color: '#ff7f00' },
        { value: 1.1, color: '#ffe700' },
        { value: 0.15, color: '#8cff00' },
        { value: 0.10, color: '#00ffff' },
    ];
    const co2_yTicks = [0, 3, 6, 9, 12, 15, 18];
</script>

<section class="py-20 bg-background">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">Sustainability Facts</h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
                Insects are highly nutritious and sustainable food sources that require significantly fewer resources than traditional livestock.
            </p>
        </div>

        <!-- Water Consumption Chart -->
        <div class="flex flex-col md:flex-row md:items-center mb-10">
            <div class="md:w-1/2 md:pl-6 text-center p-3">
                <h3 class="text-2xl font-semibold mb-4">Water Consumption</h3>
                <p class="text-lg mx-8">
                    Insects require significantly less water than traditional livestock.
                    You can barely see the water consumption of crickets and mealworms on the chart!
                    It's that low!
                </p>
            </div>
            <div class="md:w-1/2 py-4 mt-4 md:mt-8">
                <BarChart data={water_data} labels={chart_labels} yTicks={water_yTicks} yLabel="Litres (L)" />
            </div>
        </div>

        <Separator class="my-10" />

        <!-- Land Use Chart -->
        <div class="flex flex-col md:flex-row md:items-center mb-10">
            <div class="md:w-1/2 md:pl-6 text-center p-3">
                <h3 class="text-2xl font-semibold mb-4">Land Use</h3>
                <p class="text-lg mx-8">
                    Insect farming uses less land area compared to traditional farming.
                    While beef requires 200m² - crickets only need 15m²
                </p>
            </div>
            <div class="md:w-1/2 py-4 mt-4 md:mt-8">
                <BarChart data={land_data} labels={chart_labels} yTicks={land_yTicks} yLabel="Square Metres (m²)" />
            </div>
        </div>

        <Separator class="my-10" />

        <!-- CO₂ Emissions Chart -->
        <div class="flex flex-col md:flex-row md:items-center">
            <div class="md:w-1/2 md:pl-6 text-center p-3">
                <h3 class="text-2xl font-semibold mb-4">CO₂ Emissions</h3>
                <p class="text-lg mx-8">
                    Insect protein production emits fewer greenhouse gases.
                    On average, insects emit 100 times less CO₂ than cattle.
                </p>
            </div>
            <div class="md:w-1/2 py-4 mt-4 md:mt-8">
                <BarChart data={co2_data} labels={chart_labels} yTicks={co2_yTicks} yLabel="CO₂ Emissions (kg) per 1kg of meat" />
            </div>
        </div>
    </div>
</section> 