import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import bingli from '@/views/modules/bingli/list'
    import cart from '@/views/modules/cart/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jiankangzixu from '@/views/modules/jiankangzixu/list'
    import news from '@/views/modules/news/list'
    import shangpin from '@/views/modules/shangpin/list'
    import shangpinCollection from '@/views/modules/shangpinCollection/list'
    import shangpinCommentback from '@/views/modules/shangpinCommentback/list'
    import shangpinOrder from '@/views/modules/shangpinOrder/list'
    import yaofang from '@/views/modules/yaofang/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yishengCollection from '@/views/modules/yishengCollection/list'
    import yishengLiuyan from '@/views/modules/yishengLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuyue from '@/views/modules/yuyue/list'
    import config from '@/views/modules/config/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryJiankangzixu from '@/views/modules/dictionaryJiankangzixu/list'
    import dictionaryKeshi from '@/views/modules/dictionaryKeshi/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangpin from '@/views/modules/dictionaryShangpin/list'
    import dictionaryShangpinCollection from '@/views/modules/dictionaryShangpinCollection/list'
    import dictionaryShangpinOrder from '@/views/modules/dictionaryShangpinOrder/list'
    import dictionaryShangpinOrderPayment from '@/views/modules/dictionaryShangpinOrderPayment/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryYaofang from '@/views/modules/dictionaryYaofang/list'
    import dictionaryYishengCollection from '@/views/modules/dictionaryYishengCollection/list'
    import dictionaryYuyueYesno from '@/views/modules/dictionaryYuyueYesno/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'
    import dictionaryZuozhen from '@/views/modules/dictionaryZuozhen/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryJiankangzixu',
        name: '健康资讯类型名称',
        component: dictionaryJiankangzixu
    }
    ,{
        path: '/dictionaryKeshi',
        name: '科室类型名称',
        component: dictionaryKeshi
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型名称',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangpin',
        name: '药品类型名称',
        component: dictionaryShangpin
    }
    ,{
        path: '/dictionaryShangpinCollection',
        name: '收藏表类型',
        component: dictionaryShangpinCollection
    }
    ,{
        path: '/dictionaryShangpinOrder',
        name: '订单类型名称',
        component: dictionaryShangpinOrder
    }
    ,{
        path: '/dictionaryShangpinOrderPayment',
        name: '订单支付类型名称',
        component: dictionaryShangpinOrderPayment
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架名称',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryYaofang',
        name: '药方类型名称',
        component: dictionaryYaofang
    }
    ,{
        path: '/dictionaryYishengCollection',
        name: '收藏表类型',
        component: dictionaryYishengCollection
    }
    ,{
        path: '/dictionaryYuyueYesno',
        name: '预约状态',
        component: dictionaryYuyueYesno
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位类型名称',
        component: dictionaryZhiwei
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/dictionaryZuozhen',
        name: '坐诊类型名称',
        component: dictionaryZuozhen
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/bingli',
        name: '病例',
        component: bingli
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/chat',
        name: '客服聊天',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/jiankangzixu',
        name: '健康资讯',
        component: jiankangzixu
      }
    ,{
        path: '/news',
        name: '新闻资讯',
        component: news
      }
    ,{
        path: '/shangpin',
        name: '药品',
        component: shangpin
      }
    ,{
        path: '/shangpinCollection',
        name: '药品收藏',
        component: shangpinCollection
      }
    ,{
        path: '/shangpinCommentback',
        name: '药品评价',
        component: shangpinCommentback
      }
    ,{
        path: '/shangpinOrder',
        name: '药品订单',
        component: shangpinOrder
      }
    ,{
        path: '/yaofang',
        name: '药方',
        component: yaofang
      }
    ,{
        path: '/yisheng',
        name: '医生',
        component: yisheng
      }
    ,{
        path: '/yishengCollection',
        name: '医生收藏',
        component: yishengCollection
      }
    ,{
        path: '/yishengLiuyan',
        name: '医生留言',
        component: yishengLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuyue',
        name: '医生预约',
        component: yuyue
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
