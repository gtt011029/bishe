<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto='4000'>
      <mt-swipe-item v-for='item in lunbo'>
        <img :src='item.Lsrc' alt=''>
      </mt-swipe-item>
    </mt-swipe>

    <!--推荐医生-->
    <div class='doctor'>
      <div class='top'>
        <span>推荐医生</span>
        <span class='right more'>更多 ></span>
      </div>
      <div class='main0'>
        <div class='main'>
          <div v-for='item in doctors' class='mainInner'>
            <router-link class='first' :to="'/docotorDetail/'+item.Did" tag='div'>
              <img src='../../public/images/doctor.png' alt=''>
            </router-link>
            <div class='second'>
              <p>{{ item.Dname }} <span>{{ item.Dpro }}</span></p>
              <p>无锡人民医院 {{ item.Doffice }}</p>
              <p id='shanchang'>擅长：{{ item.Dspecialise }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!--推荐医院-->
    <div class='hospital'>
      <div class='top'>
        <span>推荐医院</span>
        <span class='right more'>更多 ></span>
      </div>
      <div class='main0'>
        <div class='main1'>
          <div>
            <div>
              <img src='../assets/images/hospital/复旦大学附属华山医院.webp' alt=''>
            </div>
            <p>复旦大学附属华山医院</p>
          </div>
          <div>
            <div>
              <img
                src='../assets/images/hospital/复旦大学附属中山医院.webp'
                alt=''>
            </div>
            <p>复旦大学附属中山医院</p>
          </div>
          <div>
            <div>
              <img src='../assets/images/hospital/上海市第六人民医院.webp'
                 alt=''>
            </div>
            <p>上海市第六人民医院</p>
          </div>
          <div>
            <div>
              <img
                src='../assets/images/hospital/上海长海医院.webp'
                alt=''>
            </div>
            <p>上海长海医院</p>
          </div>
          <div>
            <div>
              <img src='../assets/images/hospital/中南大学湘雅医院.webp'
                 alt=''>
            </div>
            <p>中南大学湘雅医院</p>
          </div>
          <div>
            <div>
              <img src='../assets/images/hospital/常州市第一人民医院.webp'
                 alt=''>
            </div>
            <p>常州市第一人民医院</p>
          </div>
        </div>
      </div>
    </div>

    <!--医院排行-->
    <div class='hospitalRanking'>
      <span>医院排行</span>
      <div class='main3'>
        <div>
          <div>
            <img src='../assets/images/hospital/复旦大学附属华山医院.webp' alt=''>
          </div>
          <div>
            <p class='hospital_name'>复旦大学附属华山医院</p>
            <p>三甲</p>
          </div>
          <div>
            <p>已约人数 <span>3360</span></p>
          </div>
        </div>
        <div>
          <div>
            <img
                src='../assets/images/hospital/复旦大学附属中山医院.webp'
                alt=''>
          </div>
          <div>
            <p class='hospital_name'>复旦大学附属中山医院</p>
            <p>三甲</p>
          </div>
          <div>
            <p>已约人数 <span>3200</span></p>
          </div>
        </div>
        <div>
          <div>
            <img src='../assets/images/hospital/上海市第六人民医院.webp'
                 alt=''>
          </div>
          <div>
            <p class='hospital_name'>上海市第六人民医院</p>
            <p>三甲</p>
          </div>
          <div>
            <p>已约人数 <span>2855</span></p>
          </div>
        </div>
        <div>
          <div>
            <img
                src='../assets/images/hospital/上海长海医院.webp'
                alt=''>
          </div>
          <div>
            <p class='hospital_name'>上海长海医院</p>
            <p>三甲</p>
          </div>
          <div>
            <p>已约人数 <span>2576</span></p>
          </div>
        </div>
        <div>
          <div>
            <img src='../assets/images/hospital/中南大学湘雅医院.webp'
                 alt=''>
          </div>
          <div>
            <p class='hospital_name'>中南大学湘雅医院</p>
            <p>三甲</p>
          </div>
          <div>
            <p>已约人数 <span>2410</span></p>
          </div>
        </div>
        <div>
          <div>
            <img src='../assets/images/hospital/常州市第一人民医院.webp'
                 alt=''>
          </div>
          <div>
            <p class='hospital_name'>常州市第一人民医院</p>
            <p>三级</p>
          </div>
          <div>
            <p>已约人数 <span>1934</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      doctors: [],
      lunbo: []
    };
  },
  created() {
    this.getdoctors();
    this.getlunbos();
  },
  methods: {
    getdoctors() {
      this.$http.get('api/doctors').then(function (data) {
        this.doctors = data.body;
      });
    },
    getlunbos() {
      this.$http.get('api/getlunbos').then(function (data) {
        this.lunbo = data.body;
      });
    }
  }
};
</script>


<style lang='less' scoped>
#shanchang {
  width: 150px;
  height: 20px;
  overflow: hidden;
}

.right {
  float: right;
}

.top {
  height: 40px;
  /*background-color: red;*/
  line-height: 40px;

  .more {
    color: gray;
    font-size: 14px;
  }
}

.main0 {
  width: 100%;
  overflow-x: scroll;
}

.mint-swipe {
  /*必须要设置高度，否则轮播图没有高度*/
  height: 200px;
  /*每一个轮播图的item*/

  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.doctor {
  .top {
    padding: 0 5px;
  }

  .main {
    width: 600%;
    /*height: 200px;*/
    /*background-color: red;*/
    display: flex;

    .mainInner {
      flex: 1;
      display: flex;

      .first {
        flex: 1;

        img {
          width: 100px;
        }
      }

      .second {
        padding-left: 5px;
        flex: 3;
        /*background-color: red;*/
      }
    }
  }
}

.hospital {
  padding: 0 5px;

  .main1 {
    width: 300%;
    display: flex;
    /*height: 200px;*/
    /*background-color: red;*/

    > div {
      flex: 1;

      img {
        width: 130px;
        height: 80px;
      }
    }
  }
}

.hospitalRanking {
  padding: 0 5px;

  > span {
    height: 40px;
    line-height: 40px;
  }

  .main3 {
    > div {
      width: 100%;
      display: flex;

      > :nth-of-type(1) {
        flex: 3;

        img {
          width: 130px;
          height: 80px;
        }
      }

      > :nth-of-type(3) {
        flex: 3;

        p {
          margin-top: 10px;

          span {
            color: #42b983;
          }
        }
      }

      > :nth-of-type(2) {
        flex: 4;
        padding: 10px;

        .hospital_name {
          color: #000;
        }
      }
    }
  }
}
</style>
