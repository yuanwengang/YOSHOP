// pages/Home/Home.js
import MyFetch from "../../api/fetch";
import Api from '../../api/api';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        lunboObj:"",
        newestArray:[],
        RelatedArray:[]
    },

    Related(e){
        wx.navigateTo({
          url: '../Home/Particulars/particulars?item='+e.currentTarget.dataset.item,
        })
        console.log(e.currentTarget.dataset.item)
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        MyFetch({url:Api.firewormUrl+"//index.php?s=/api/index/page&wxapp_id=10001&token=8f7480921b1083b0df0554063b6d62b4"}).then(res=>{
            console.log(res.data)
            this.setData({
                lunboObj:res.data.data.items.n606196612728596.data,
                newestArray:res.data.data.newest,
                RelatedArray:res.data.data.best
            
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