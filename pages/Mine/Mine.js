// pages/Mine/Mine.js
import MyFetch from "../../api/fetch";
import Api from '../../api/api';
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    dianji1(){
        wx.navigateTo({
          url: '../MyOrder/MyOrder',
        })
    },
    dianji2(){
        wx.navigateTo({
          url: '../MyOrder/MyOrder',
        })
    },
    dianji3(){
        wx.navigateTo({
          url: '../MyOrder/MyOrder',
        })
    },
    dianji4(){
        wx.navigateTo({
          url: '../MyOrder/MyOrder',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        MyFetch({url:Api.firewormUrl+"/index.php?s=/api/user.index/detail&wxapp_id=10001&token=b8c8563d16160dd4e48dc958aa142fd4"}).then(res=>{
            console.log(res.data.data)

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