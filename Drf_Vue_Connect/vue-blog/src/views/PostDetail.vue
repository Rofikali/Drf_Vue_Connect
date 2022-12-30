<script setup>
import { useRouter, useRoute } from 'vue-router'
// composable start here 
import useStudent from '../composables/blogApi';
import { onMounted } from 'vue';

// current route accessing
// const router = useRouter()
// console.log('this is route', route)
// console.log('this is router', router)

const {
    studentData,
    error,
    getSingleStudent
} = useStudent();

const route = useRoute()

onMounted(() => {
    getSingleStudent(route.params.id)
});
// composable end here 


</script>

<template>
    <div class="shadow-md pb-6">
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium" role="alert" v-if="error">
            Oops! Error encountered: {{ error.message }}
        </div>
        <table class="table-auto w-full" v-else-if="studentData">
            <thead class="bg-slate-600 text-white">
                <tr>
                    <th class="py-1">ID</th>
                    <th class="py-1">Name</th>
                    <th class="py-1">Email</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr>
                    <td class="py-2">{{ studentData.id }}</td>
                    <td class="py-2">{{ studentData.title }}</td>
                    <td class="py-2">{{ studentData.content }}</td>
                </tr>
            </tbody>
        </table>
        <div class="m-8 flex justify-center">
            <RouterLink :to="{ name: 'posts' }">
                <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800">
                    Back to Home
                </button>
            </RouterLink>
        </div>
    </div>
</template>
  
<style scoped>

</style>