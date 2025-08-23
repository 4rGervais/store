import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const ProductService = {
  async getAllProducts(){
    try {
      const response = await api.get('/')
      return response.data
    } catch (error) {
      console.log(error);
    }
  },
  async getOneProduct(id){
    const response = await api.get(`/${id}`)
    return response.data
  },
  async addProducts(productDetails){
    const response = await api.post('/',productDetails)
    return response.data
  },
  async updateProduct(id,newProductDetails){
    const response = await api.put(`/${id}`,newProductDetails)
    return response.data
  },
  async deleteProduct(id){
    const response = await api.delete(`/${id}`)
    return response.data
  }
}
// class App extends Component {
//   constructor() {
//     super()
//     api.get('/').then( res => {
//       console.log(res.data);
//     })
//   }
// }
// function App() {
//   const [user, setUser] = useState([])
//   const getUser = () => fetch('http://localhost:3000').then( res => res.json()).then(json => setUser(json.data))
//   useEffect(() => {
//     getUser()
//   },[])
//   return (
//       <table>
//         <tr>
//           <th>N<sup><u>0</u></sup></th>
//           <th>Name</th>
//           <th>Description</th>
//           <th>Price</th>
//           <th>Stock quantity</th>
//         </tr>
//         {
//           user.map((val, i)=>{
//             return (
//               <tr>
//                 <td>{i+1}</td>
//                 <td>{val.name}</td>
//                 <td>{val.description}</td>
//                 <td>{val.price}</td>
//                 <td>{val.stock_quantity}</td>
//               </tr>
//             )
//           })
//         }
//       </table>
//   )

// }

export default ProductService
