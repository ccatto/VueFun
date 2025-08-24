<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="relative w-64 h-64">
      <!-- {/* Main Earth sphere with gradient */} -->
      <div
        className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 shadow-2xl relative overflow-hidden"
      >
        <!-- {/* Subtle highlight for 3D effect */} -->
        <div
          className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-sm"
        ></div>

        <!-- {/* North America landmass */} -->
        <div
          className="absolute top-16 left-12 w-20 h-16 bg-green-600 rounded-tl-3xl rounded-br-2xl transform -rotate-12 opacity-90"
        ></div>
        <div
          className="absolute top-12 left-16 w-12 h-8 bg-green-700 rounded-full transform rotate-45 opacity-80"
        ></div>
        <div
          className="absolute top-20 left-8 w-8 h-12 bg-green-600 rounded-full transform -rotate-45 opacity-85"
        ></div>

        <!-- {/* Central America (thin connection) */} -->
        <div
          className="absolute top-32 left-20 w-3 h-8 bg-green-600 rounded-full transform rotate-12 opacity-90"
        ></div>

        <!-- {/* South America landmass */} -->
        <div
          className="absolute top-40 left-18 w-16 h-24 bg-green-600 rounded-t-2xl rounded-bl-3xl transform rotate-6 opacity-90"
        ></div>
        <div
          className="absolute top-36 left-22 w-8 h-16 bg-green-700 rounded-full transform -rotate-12 opacity-80"
        ></div>

        <!-- {/* Additional small landmasses for detail */} -->
        <div className="absolute top-28 left-6 w-4 h-3 bg-green-600 rounded-full opacity-75"></div>
        <div
          className="absolute top-48 left-14 w-3 h-6 bg-green-700 rounded-full transform rotate-15 opacity-80"
        ></div>

        <!-- {/* Ocean depth variations */} -->
        <div className="absolute top-8 right-8 w-12 h-8 bg-blue-600 rounded-full opacity-60"></div>
        <div
          className="absolute bottom-12 left-8 w-16 h-6 bg-blue-800 rounded-full opacity-40"
        ></div>
        <div
          className="absolute bottom-8 right-12 w-10 h-10 bg-blue-600 rounded-full opacity-50"
        ></div>

        <!-- {/* Atmosphere glow effect */} -->
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EarthGlobe',
};
</script>
