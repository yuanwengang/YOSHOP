// pages/All/All.js
import MyFetch from "../../api/fetch";
import Api from '../../api/api';
import Notify from '../../dist/notify/notify';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey: 0,
        AllArray:[],//全部
        SidebarArray:[],//侧边导航
    },
    onChange(event) {
        Notify({ type: 'primary', message: event.detail });
      },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        MyFetch({url:Api.firewormUrl+"//index.php?s=/api/category/index&wxapp_id=10001&token=&page=1"}).then(res=>{
            console.log(res.data.data.goodsList.data)
            this.setData({
                AllArray:res.data.data.goodsList.data,
                SidebarArray:res.data.data.categoryList
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