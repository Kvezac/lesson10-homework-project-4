/* classroom.js */

/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
  const lenRating = grades.length;
  console.log(lenRating);
  return lenRating;
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
  const sumRating = grades.reduce((total, number) => total + number);
  return sumRating;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
  const sumAvgRating =
    grades.reduce((total, number) => total + number) / grades.length;
  return sumAvgRating.toFixed(2);
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
  const ratingPasssing = [];
  grades.forEach((element) => {
    if (element >= 10) {
      ratingPasssing.push(element);
    }
  });
  return ratingPasssing.sort((a, b) => b - a);
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
  const ratingFailing = [];
  grades.forEach((element) => {
    if (element < 10) {
      ratingFailing.push(element);
    }
  });
  return ratingFailing.sort((a, b) => a - b);
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
  grades.forEach(function (element, index) {
    grades[index] = element + 1;
  });
  return grades;
}
