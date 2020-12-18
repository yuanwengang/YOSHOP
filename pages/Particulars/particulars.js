// pages/Particulars/particulars.js
import Api from "../../api/api"
import MyFetch from "../../api/fetch"
import Dialog from '../../dist/dialog/dialog';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        lunboArray:"",
        activeNames: ['1'],
        activeNames1:['1']
        
    },
    // 购买数量
    onChange(event) {
        this.setData({
          activeNames: event.detail,
        });
      },
      onChange1(event) {
        this.setData({
          activeNames1: event.detail,
        });
      },
    //   加入购物车
      onClickIcon() {
        Toast('点击图标');
        
      },

    onClickIcon1(){
        wx.switchTab({
          url: '../Shopping-cart/Shopping',
        })
    },
      onClickButton() {
        Toast('点击按钮');
      },
    //   客服提示框
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        MyFetch({url:Api.firewormUrl+"//index.php?s=/api/goods/detail&wxapp_id=10001&token=&goods_id="+options.goods_id}).then(res=>{
            console.log(res)
            this.setData({
                lunboArray:res.data.data.detail.image,
                name:res.data.data.detail.goods_name,
                price:res.data.data.detail.spec[0].goods_price,//优惠后
                line_price:res.data.data.detail.spec[0].line_price,//优惠前
                sales:res.data.data.detail.goods_sales,//销量
                stock_num:res.data.data.detail.spec[0].stock_num,//库存
                detail:res.data.data.detail
            })
            
    
        })
    
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
    
})