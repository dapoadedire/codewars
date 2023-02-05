let count = 0;
function per(number){
    if (digitArray(number).length === 1){
        return count;
    }
    else{
        count +=1
        const new_num = multiplyEach(digitArray(number))
        per(new_num)
    }
    return count;
}

const multiplyEach = nums => nums.reduce((res, num) => res * num, nums.length ? 1 : 0);
const digitArray = number => String(number).split('').map(Number);


const persistence = (num) => console.log(per(num))

persistence(2345)