export const formattedDate = (currentDate) => {
  let date = new Date(currentDate);

  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day =
    date.getUTCDate() <= 9 ? `0${date.getUTCDate()}` : date.getUTCDate();

  return `${year}-${month}-${day}`;
};

export const ADULTS_GRADES = {
  platform_01: 0.05,
  participation_01: 0.05,
  fast_test_01: 0.05,
  midterm: 0.25,
  project: 0.1,
  platform_02: 0.05,
  participation_02: 0.05,
  fast_test_02: 0.05,
  final_exam: 0.35,
};

export const GENERAL_GRADES = {
  evidence_01: 0.1,
  participation_01: 0.1,
  midterm: 0.2,
  project: 0.2,
  evidence_02: 0.1,
  participation_02: 0.1,
  final_exam: 0.2,
};

export const TEENS_GRADES = {
  platform_01: 0.1,
  participation_01: 0.1,
  midterm: 0.2,
  project: 0.2,
  platform_02: 0.1,
  participation_02: 0.1,
  final_exam: 0.2,
};

export const customDate = (date) => {
  const splittedDate = date.split('-');
  const year = splittedDate[0];
  const month = splittedDate[1];
  const day = splittedDate[2];

  return `${month}/${day}/${year}`;
};

export const MAX_TEACHER_COMMENT_COUNTER = 100;
