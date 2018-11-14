// 血检总人数
let num = 10679
//hp血检阳性数
let num2 = 5007
// 实际精查人数
let num3 = 1517
// /应精查人数
let num4 = 3885
// 高级别上皮内瘤变
let rnum1 = '13%'
// 早期胃癌
let rnum2 = '66%'
// 早期食管癌
let rnum3 = '13%'
// 萎缩性胃炎
let onum1 = 309
// 胃溃疡
let onum2 = 61
// 胃息肉
let onum3 = 258
// 申请医院 
let anum1 = 71
// 开展筛查医院
let anum2 = 61
// 筛查总人数 
let anum3 = 10679
// 认证医院 
let anum4 = 80
let obj = {
    // 血检总人数
    count1: {
        lastNumber: num,
        duration: 3000,
        easing: 'swing', //慢快慢
    },
    //hp血检阳性数
    count2: {
        lastNumber: num2,
        duration: 3000,
        easing: 'swing', //慢快慢
    },
    // 实际精查人数
    count3: {
        lastNumber: num3,
        duration: 3000,
        easing: 'swing', //慢快慢
    },
    // /应精查人数
    count4: {
        lastNumber: num4,
        duration: 3000,
        easing: 'swing', //慢快慢
    },
    //第一组小人的个数Big
    rate1: parseInt(((num2 / num) - 0) * 100)-1.2 + '%',
    //第二组小人的个数Big
    rate2: parseInt(((num3 / num4) - 0) * 100)-2 + '%',
     //第一组小人的个数4K
    rate14k: parseInt(((num2 / num) - 0) * 100)-1 + '%',
     //第二组小人的个数4K
    rate24k: parseInt(((num3 / num4) - 0) * 100)-2 + '%',
      //第一组小人的个数PC
    rate1pc: parseInt(((num2 / num) - 0) * 100)-1 + '%',
    //第二组小人的个数PC
    rate2pc: parseInt(((num3 / num4) - 0) * 100)-2 + '%',
    //诊断结果
    rnum1,
    rnum2,
    rnum3,
    // 其他
    onum1,
    onum2,
    onum3,
    anum1,
    anum2,
    anum3,
    anum4
}





