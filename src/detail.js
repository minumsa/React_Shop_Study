/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './detail.css';

function Detail(props){

  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState('');

  useEffect(()=>{

    let 타이머 = setTimeout(() => { alert변경(false) }, 2000);
    console.log('안녕');
    return ()=>{ clearTimeout(타이머) }
  },[]);

  let { id } = useParams();
  let 찾은상품 = props.tshirt.find(function(상품){
    return 상품.id == id
  });
  let history = useHistory();

  return (
    <div className="container">

      <input onChange={ (e)=>{ inputData변경
      (e.target.value) }}/>

      {/* e.target.value == input에 입력된 값 */}

      {
        alert === true 
        ? (<div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>)
        : null
      }

      <div className="row">
        <div className="col-md-6">
        <img src="/img/2.png" alt="t2" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>상품설명</p>
          <p>{찾은상품.price}</p>

          <Info 재고={props.재고}></Info>

          <button className="btn btn-danger" onClick={ ()=>{ props.재고변경([9,11,12]) } }>주문하기</button> 
          <button onClick={ ()=>{ history.push('/') }} className="btn btn-danger">뒤로가기</button>
        </div>
      </div>
  </div>
  )
};

function Info(props){
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}

export default Detail