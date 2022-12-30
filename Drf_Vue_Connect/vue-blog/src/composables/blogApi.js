// mouse.js
import { ref } from 'vue'
import axios from 'axios'

// export default function useStu() {
//     const lnk = ''
//     const allData = ref([])
//     const ers = ref(null)

//     getAllData = async () => {
//         allData.value = []
//         ers.value = null
//         try {
//             const rs = await axios(lnk)
//             allData.value = rs.data
//         } catch (ers) {
//             console.log('errors are here', ers)
//             ers.value = ers
//         }
//     }
//     return {
//         useStu,
//         getAllData,
//         ers
//     }
// }


// by convention, composable function names start with "use"
export default function useStudent() {
    // state encapsulated and managed by the composable
    const url = "http://127.0.0.1:8000/"
    const detail_url = "http://127.0.0.1:8000/detail/"
    const studentData = ref([])
    const error = ref(null)

    const getAllStudent = async () => {
        studentData.value = []
        error.value = null
        try {
            const res = await axios(url)
            // console.log('res dta', res.data)
            studentData.value = res.data
        } catch (err) {
            // console.log('err error', err)
            error.value = err
        }

    }
    // Get Single Student Data
    const getSingleStudent = async (slug) => {
        studentData.value = []
        error.value = null
        try {
            const res = await axios(detail_url + slug)
            studentData.value = res.data
        } catch (err) {
            error.value = err
        }
    }

    return {
        studentData,
        error,
        getAllStudent,
        getSingleStudent
    }
}


