/* eslint-disable */
<template>
  <div class="view">
    <div>
      <div class="viewQuest">
        <p class="quest">{{questing}}</p>
        <div class="viewAnswer">
          <div>
            <input type="radio" name="paixu" id="paixu1" value="4" v-model="param">
            <label for="paixu1" style="cursor:pointer">总是</label>
          </div>
          <div>
            <input type="radio" name="paixu" id="paixu2" value="3" v-model="param">
            <label for="paixu2" style="cursor:pointer">经常</label>
          </div>
          <div>
            <input type="radio" name="paixu" id="paixu3" value="2" v-model="param">
            <label for="paixu3" style="cursor:pointer">有时</label>
          </div>
          <div>
            <input type="radio" name="paixu" id="paixu4" value="1" v-model="param">
            <label for="paixu4" style="cursor:pointer">很少</label>
          </div>
          <div>
            <input type="radio" name="paixu" id="paixu5" value="0" v-model="param">
            <label for="paixu5" style="cursor:pointer">从未</label>
          </div>
          
          <img src="../../assets/images/Haima/plant1.png">
        </div>
      </div>
      <button @click='nextQuest'>下一题</button>
<!--      <button @click='inHome'>完成</button>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      param: -1,
      num: 0,
      questing: '',
      questingData: [
        "1. 我感觉到背部疼痛。",
        "2. 我难以入睡，即便睡着也睡不踏实。",
        "3. 我有头痛。",
        "4. 如果让我等待，我会焦躁。",
        "5. 我的后颈疼痛。",
        "6. 我很敏感，神经紧绷。",
        "7. 我有胃病或消化不良。",
        "8. 我不自信。",
        "9. 我喜欢自言自语。",
        "10. 我担心钱的问题。",
        "11. 我和别人见面或者说话前会焦虑。",
        "12. 我怕发生恐怖的事或者灾难。",
        "13. 白天时候，我就觉得累。",
        "14. 我的喉咙很紧很涩，但并非生病。",
        "15. 我情绪不安，无法安静的待着。",
        "16. 我感到非常口渴。",
        "17. 我的心跳很快。",
        "18. 我觉得自己无用。",
        "19. 我吸烟。",
        "20. 我独自一人会感觉不舒服。",
        "21. 我觉得不快乐。",
        "22. 我流汗。",
        "23. 我喝酒。",
        "24. 我很自律。",
        "25. 我觉得自己不是我自己，好像四分五裂。",
        "26. 我的眼睛又酸又累。",
        "27. 我的腿或脚抽筋。",
        "28. 我怕认识陌生人。",
        "29. 我手脚冰凉。",
        "30. 我有便秘。",
        "31. 我有药物滥用的情况。",
        "32. 我发现自己很容易哭。",
        "33. 我咬指甲。",
        "34. 我耳中有嗡嗡声。",
        "35. 我小便频繁。",
        "36. 我担心我的工作。",
        "37. 我为琐事忧虑。",
        "38. 我呼吸浅促急促。",
        "39. 我觉得胸部紧迫。",
        "40. 我发现很难作决定。"
      ]
    };
  },
  created () {
    this.questing = this.questingData[0]
  },
  methods: {
    nextQuest () {
      if (this.num >= 39) {
        this.score += Number(this.param)
        this.$router.push({path: 'ResultLoading', query: {score: this.score}});
      } else {
        if (this.param >= 0) {
          this.score += Number(this.param)
          this.num++
          this.questing = this.questingData[this.num]
          this.param = -1
        }
      }
      
    }
  },
};
</script>

<style scoped="true" lang="scss">
  .view {
    width: 100%;
    height: 100%;
    background-color: #E7F7FD;
    overflow-y: scroll;

    div {
      .viewQuest {
        width: 303px;
        height: 406px;
        background-color: #f5fbfe;
        margin: 0 auto;
        margin-top: 36px;
        padding-top: 46px;

        .quest {
          width: 223px;
          margin: 0 auto;
          height: 96px;

          font-family: SourceHanSansCN-Medium;
          font-size: 22px;
          color: #226166;
          line-height: 32px;
        }

        .viewAnswer {
          width: 100%;
/*          overflow: hidden;*/

          div {
            width: 50%;
            display: inline-block;
            text-align: center;
            margin-bottom: 55px;
            
            input{
              display: none;
            }
            label{
                position: relative;
                padding-left: 30px;
                font-family: SourceHanSansCN-Medium;
                font-size: 16px;
                line-height: 16px;
                color: #226166;
            }
            label::before{
                display: inline-block;
                content: "";
                width: 14px;
                height: 14px;
              position: absolute;
              top: 2px;
              left: 0;
                border-radius: 50%;
                border: 2px solid #226166;
                margin-right: 6px;
                vertical-align: bottom;
            }
            input:checked+label::before{
                background-color: transparent;
            }
            input:checked+label::after{
                display: inline-block;
                content: "";
                width: 10px;
                height: 10px;
                border-radius: 50%;
                position: absolute;
              left: 4px;
              top: 6px;
/*                left: 3.7px;*/
/*                left: -51.5px;*/
/*                bottom: 4px;*/
/*                bottom: 4.5px;*/
                background-color: #48BFD0;
            }
          }
            
          img {
            height: 78px;
            float: right;
            bottom: -43px;
            right: 4px;
            position: relative;
          }

        }
      }

      button {
        background: #48BFD0;
        display: block;
        border: none;
        border-radius: 4px;
        width: 160px;
        height: 70px;
        margin: 0 auto;
        font-family: SourceHanSansCN-Bold;
        font-size: 24px;
        color: #FFFFFF;
        box-shadow: 8px 8px #226166;
        margin-top: 60px;
      }
    }
  }
</style>
