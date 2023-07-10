import React,{useEffect,useContext, useState} from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from "react-router-dom";

function Posts() {
  const {firebase} = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const {setPostDetails} = useContext(PostContext)
  const navigate = useNavigate()
  useEffect(() => {
    
  firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
      return {
        ...product.data(),
        id:product.id
      }
    })
    setProducts(allPost)
  })
    
  }, [])
  

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {products.map((product) => {
            return (
              <div
                className="card"
                onClick={() => {
                  setPostDetails(product);
                  navigate("/view");
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="https://motocentral.in/cdn/shop/products/Kawasaki_Z900_my2020_S1-Titanio_Dettaglio_1024x1024.jpg?v=1663933445"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 10000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name">Kawasaki Exhaust</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="https://imgeng.jagran.com/images/2023/apr/best%20apple%20laptops%20price%20in%20India1682674778272.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 50000</p>
              <span className="kilometer">Mac pro</span>
              <p className="name">Apple</p>
            </div>
            <div className="date">
              <span>10/5/2023</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 30000</p>
              <span className="kilometer">Hp AC3000</span>
              <p className="name">HP</p>
            </div>
            <div className="date">
              <span>16/3/2023</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 30000</p>
              <span className="kilometer">Hp AC3000</span>
              <p className="name">HP</p>
            </div>
            <div className="date">
              <span>16/3/2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
