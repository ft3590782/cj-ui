<template>
  <div>
    <h1>calendar</h1>
  </div>
</template>
<script>
function calendarCore(_year, _month) {
  let date = new Date();
  //当前是哪一年
  let year = _year ? _year : date.getFullYear();
  //当前是哪个月，注意这里的月是从0开始计数的
  let month = _month ? _month - 1 : date.getMonth();

  //判断当前月第一天是星期几
  let firstDay = new Date(year, month, 1);
  console.log("firstDay", firstDay);
  let weekday = firstDay.getDay();
  console.log("weekday", weekday);
  //求当前月一共多少天
  //   let days = new Date(year, month + 1, 0).getDate();

  //补全当前月之前的空格
  //   获取上个月天数,year,month遇到0没有边界情况,会自动上退1天
  let prevMonthDate = new Date(year, month, 0); //上个月最后一天
  console.log(prevMonthDate);
  let prevYear = prevMonthDate.getFullYear(); //上个月的年份
  let prevMonth = prevMonthDate.getMonth(); //上个月的月份,注意这里的月是从0开始计数的
  let prevMonthDays = prevMonthDate.getDate(); //上个月共有多少天
  let arr = [];

  //   if(weekday===0){
  //       表示当前月第一天是周日,不补充
  //   }

  //获取上个月的最后几天,补白
  for (let i = 0; i < weekday; i++) {
    let prevDay = prevMonthDays - i;

    arr.push({
      currentMonth: false, //是否当月
      isPrevMonth: true,
      value: `${prevYear}/${prevMonth + 1}/${prevDay}`, //由于月份从0计数,写做文字需+1
      dateValue: new Date(prevYear, prevMonth, prevDay),
    });
  }
  arr.reverse();
  console.log(arr);
}

export default {
  created() {
    calendarCore(2020, 9);
  },
};
</script>
