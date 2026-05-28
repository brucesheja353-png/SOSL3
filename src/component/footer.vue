<template>
<footer class="bg-green-800 text-white px-8 py-10 mt-10">
    <div class="flex flex-wrap justify-between gap-8">
        <!--this is about of footer-->
        <div>
           <h3 class="text-yellow-300 font-bold text-Ig mb-3">TEMBERA URWANDA</h3>
           <p class="text-sm text-green-200">Discover the beauty of the land of a Thousand hills</p>  
        </div>
        <!-- Quick links -->
         <div>
            <h3 class="text-yellow-300 font-bold text-Ig mb-3">Quick links</h3>
            <ul class="space-y-2 text-sm">
                <li>
                    <RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink>
                </li>
                <li>                    
                    <RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/service" class="hover:text-yellow-300">Service</RouterLink>
                </li>
                <li>                   
                    <RouterLink to="/gallery" class="hover:text-yellow-300">Gallery</RouterLink>
                </li>
                <li>
                    <RouterLink to="/destination" class="hover:text-yellow-300">Destination</RouterLink>
                </li>
            </ul>
         </div>
           <!-- Destination -->
            <div>
                <h3 class="text-yellow-300 font-bold text-Ig mb-3">Destination</h3>
                <ul class="space-y-2 text-sm">
                    <li>
                        <RouterLink to="/northern" class="hover:text-yellow-300">Northern Province</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/western" class="hover:text-yellow-300">Western Province</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/eastern" class="hover:text-yellow-300">Eastern Province</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/southern" class="hover:text-yellow-300">Southern Province</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/kigali" class="hover:text-yellow-300">Kigali city</RouterLink>
                    </li>
                </ul>
            </div>
            <!-- Contact info -->
             <div>
                <h3 class="text-yellow-300 font-bold text-Ig mb-3">Contact</h3>
                <ul class="space-y-2 text-sm">
                    <li>brucesheja353@gmail.com</li>
                    <li>+0786718062</li>
                    <li>Kagugu Kigali Rwanda</li>
                </ul>
    </div>
     </div>
             <!-- place for copy right -->
              <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300">
                <p class="text-center">©️ 2025  Visit Rwanda. All right reserved. Done by Bruce</p>
              </div>  
</footer>    
</template>