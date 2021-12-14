import React, { useState ,useEffect } from "react";
import Masonry from 'masonry-layout'
import imagesloaded  from 'imagesloaded'
import InfiniteScroll from 'react-infinite-scroller'
import axios from 'axios'
import { Spin } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';
import style from "./firstPage.css"

const FirstPage = () => {
  const [hasMore, setMore] = useState(true)
  const [img, setImg] = useState([])
  const [loaded, setloaded] = useState('none')
  const [dataPage, setdataPage] = useState(0)
  const [show, setshow] = useState('none')
  const [showload, setshowload] = useState('block')

  useEffect(() => {
    loadImg()
  }, [])

  const imagesOnload = () => {
    const elLoad = imagesloaded('.'+style.fbox)  //获取下拉加载里面的第一个盒子
    //always 图片已全部加载，或被确认加载失败
    elLoad.on('always', () => {
      // 调用瀑布流
      waterFall()
      setshow('block')
      setshowload('none')
    })
  }

  const loadImg = async() => {
    let imgsrc = []
    try {
      axios.defaults.headers.common['x-api-key'] = '40a43cad-bb75-475b-bf26-c6a60506a908'; // Replace this with your API Key
      const res = await axios.get(
        'https://api.thecatapi.com/v1/images/search', 
        { params: { limit: 20, size: 'full' } }
      );
      const temp = res.data;
      for(let i = 0;i < temp.length;i++){
        const pic = temp[i].url
        imgsrc.push(pic);
      }
      // console.log('url:', this.imgsrc[i].url);
      // console.log(this.imgsrc[i].left);
      // console.log(this.domWidth);
      // console.log(this.waterfallDeviationHeight.length)
      // console.log(minIndex);
      // console.log(this.waterfallImgCol);
    } catch (err) {
      console.log(err);
    }
    setMore(true)
    setImg([...img,imgsrc])
    imagesOnload()
    setloaded('block')
  }

  const loadMoreImg = async() => {
    let imgsrc = []
    try {
      axios.defaults.headers.common['x-api-key'] = '40a43cad-bb75-475b-bf26-c6a60506a908'; // Replace this with your API Key
      const res = await axios.get(
        'https://api.thecatapi.com/v1/images/search', 
        { params: { limit: 20, size: 'full' } }
      );
      console.log(res.data)
      const temp = res.data;
      for(let i = 0;i < temp.length;i++){
        const pic = temp[i].url
        imgsrc.push(pic);
      }
      // console.log('url:', this.imgsrc[i].url);
      // console.log(this.imgsrc[i].left);
      // console.log(this.domWidth);
      // console.log(this.waterfallDeviationHeight.length)
      // console.log(minIndex);
      // console.log(this.waterfallImgCol);
    } catch (err) {
      console.log(err);
    }
    setImg([...img,imgsrc])
    imagesOnload()
    setloaded('block')
  }

  const waterFall = () => {
    var block = document.querySelector('.'+style.fbox)
    console.log(block)
    new Masonry(block,{
      itemSelector: '.'+style.waterBox, //要布局的网格元素
      columnWidth: '.'+style.waterBox, //自适应
      fitWidth: true, // 设置网格容器宽度等于网格宽度
      gutter: 10,
    })
  }

  const changeData = (choose) => {
    if(!choose && dataPage > 0){
      setdataPage(dataPage-1)
      imagesOnload()
    }
    else if(!choose && dataPage === 0)
      alert("已经在第一页了！")
    else {
      setloaded('none')
      setdataPage(dataPage+1)
      if(!img[dataPage]){
        console.log(dataPage)
        loadMoreImg()
      }
      else {
        imagesOnload()
        setloaded('block')
      }
    }
  }

  const Wimg = () => {
    if(img[dataPage]) {
      return (
        img[dataPage].map((item, index) => (
            <div 
              className={style.waterBox} 
              key={index}
              style={{display: show}}
            >
              <img src={item} alt={index}></img>
            </div>
          )
        )
      )
    } else
      return null
  }

  return (
    <div className={style.content}>
      <div className={style.mainBlock}>
        <InfiniteScroll
          initialLoad={false} // 不让它进入直接加载
          // pageStart={1} // 设置初始化请求的页数
          loadMore={loadMoreImg}  // 监听的ajax请求
          hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
          useWindow={false} // 不监听 window 滚动条
        >
          <div className={style.fbox}>
            <Wimg></Wimg>
          </div>
          <div className={style.wloading} style={{diplay:show}}>
            <Spin size="large"></Spin>
          </div>
        </InfiniteScroll>
      </div>
      <div className={style.pageTab} style={{display: loaded}}>
        <span onClick={() => changeData(0)}><LeftOutlined></LeftOutlined></span>
        <span>{dataPage+1}</span>
        <span onClick={() => changeData(1)}><RightOutlined></RightOutlined></span>
      </div>
    </div>
  )
}

export default FirstPage;