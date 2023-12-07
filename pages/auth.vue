<template>
    <div id="AuthPage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                        <img width="170" src="../src/textLogo.png">
            </NuxtLink>
        </div>
        <div class="max-w-[400px] mx-auto px-2">
            <div class="text-center my-6">Iniciar sesión / Registrarse</div>
            <button @click="login('google')"
                    class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold transition-all" 
            >
                <img class="w-full max-w-[30px]" src="../src/google.png">
                <div>Google</div>
            </button>
            <button @click="login('facebook')"
                    class="flex items-center justify-center gap-3 p-1.5 mt-4 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold transition-all" 
            >
                <img class="w-full max-w-[30px]" src="../src/facebook.png">
                <div>Facebook</div>
            </button>
        </div>
    </div>
</template>

<script setup>
// const client = useSupabaseClient()
// const user = useSupabaseUser()

// watchEffect(() => {
//     if(user.value){
//         return navigateTo('/')
//     }
// })

// const login = async (prov) => {
//     const { data, error } = await client.auth.signInWith0Auth({
//         provider: prov
//     })
// }
</script>
