export default function findBMR (weight, height, age, sex, activityLevel) {
    var BMR = 0;

    function benedict (w, h, a, s) {
        let c1 = 66;
        let c2 = 6.2;
        let c3 = 12.7;
        let c4 = 6.76;
        if (s === 'female') {
            c1 = 665.1;
            c2 = 4.35;
            c3 = 4.7;
            c4 = 4.7;
        }
        return (c1 + (c2 * w) + (c3 * h) - (c4 * a));
    }

    function mifflin (w, h, a, s) {
        let c = -161;
        if (s === 'male') c = 5;
        return (10 * (w / 2.2) + 6.25 * (h * 2.54) - 5 * a + c);
    }

    function bmi () {
        let m = height * 0.0254;
        var BMI = (weight / 2.2) / (m ** 2);

        return BMI;
    }

    const bmiVar = bmi();
    if (bmiVar >= 30) {
        BMR = mifflin(weight, height, age, sex);
    } else if (bmiVar < 30) {
        BMR = benedict(weight, height, age, sex);
    }

    return Math.round(BMR * activityLevel);
}
