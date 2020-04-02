export default (calories) => {

    if (calories.length === 0) {
        return 0;
    } else {
        return calories.map((calorie) => calorie.caloriesAmount).reduce((sum, caloriesAmount) =>
            sum + caloriesAmount);
    }
}