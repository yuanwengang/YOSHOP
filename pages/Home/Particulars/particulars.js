// pages/Home/Particulars/particulars.js
import Api from "../../../api/api"
import MyFetch from "../../../api/fetch"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        itemObj:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        let itemObj = options
        console.log(itemObj)
        MyFetch({url:Api.firewormUrl+"//index.php?s=/api/index/page&wxapp_id=10001&token=8f7480921b1083b0df0554063b6d62b4?item="+itemObj}).then(res=>{
            console.log(res)
            
    
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