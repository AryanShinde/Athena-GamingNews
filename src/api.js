//const api_key="abfb9a20f685496482d59779b3c40b8f";
//const base_url="https://api.rawg.io/api/games?key=abfb9a20f685496482d59779b3c40b8f";
const date=new Date();

const currentMonth=date.getMonth()+1;
const currentMonthFun=()=>{
    if(currentMonth<10){
        return `0${currentMonth}`;
    }
    else{
        return currentMonth;
    }

}
const currentDay=(date.getDate());
const currentDayFun=()=>{
    if(currentDay<10){
        return `0${currentDay}`;
    }
    else{
        return currentDay;
    }

}

const currentYear=`${date.getFullYear()}-${currentMonthFun()}-${currentDayFun()}`;
const previousYear=`${date.getFullYear()-1}-${currentMonthFun()}-${currentDayFun()}`;
const upcomingYear=`${date.getFullYear()+1}-${currentMonthFun()}-${currentDayFun()}`;

export const popular_games=`https://api.rawg.io/api/games?key=abfb9a20f685496482d59779b3c40b8f&dates=${previousYear},${currentYear}&ordering=-rating`;
export const upcoming_games=`https://api.rawg.io/api/games?key=abfb9a20f685496482d59779b3c40b8f&dates=${currentYear},${upcomingYear}&ordering=-rating`;
export const new_games=`https://api.rawg.io/api/games?key=abfb9a20f685496482d59779b3c40b8f&dates=${previousYear},${currentYear}&ordering=-released`;
export const game_details=(id)=>`https://api.rawg.io/api/games/${id}?key=abfb9a20f685496482d59779b3c40b8f`;
export const screenshots=(id)=>`https://api.rawg.io/api/games/${id}/screenshots?key=abfb9a20f685496482d59779b3c40b8f`;
export const search_games=(game_name)=>`https://api.rawg.io/api/games?key=abfb9a20f685496482d59779b3c40b8f&search=${game_name}&page_size=8`;