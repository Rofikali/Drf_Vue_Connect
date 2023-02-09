<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from "vue";
// import useStudent from "../composables/studentApi";
import useStudent from '../composables/blogApi'
const {
    studentData,
    error,
    getAllStudent
} = useStudent();
onMounted(getAllStudent);

// console.log('hello', studentData)

</script>

<template>
    <div class="container mx-auto px-4">
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-2">

                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full"
                        v-for=" ({ id, title, content, created, author, slug }, i) in studentData" :key="slug">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="{{ author }}">
                            <div class="flex-grow">
                                <h1 class="text-gray-900 title-font font-medium">
                                    <RouterLink :to="{ name: 'postdetail', params: { id: slug } }">{{ title }}
                                    </RouterLink>
                                </h1>
                                <p class="text-gray-500">{{ content }}</p>
                                <h3 class="text-gray-500">{{ created }}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>