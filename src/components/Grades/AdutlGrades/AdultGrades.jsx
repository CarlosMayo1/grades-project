import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import {
  ADULTS_GRADES,
  MAX_TEACHER_COMMENT_COUNTER,
  formattedDate,
  customDate,
} from '../../../utils/utils';

const AdultGrades = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      level: '',
      student: '',
      teacher: '',
      date: formattedDate(new Date()),
      platform_01: '',
      participation_01: '',
      fast_test_01: '',
      midterm: '',
      project: '',
      platform_02: '',
      participation_02: '',
      fast_test_02: '',
      comments: '',
      final_exam: '',
    },
  });
  const [commentsCounter, setComentsCounter] = useState(
    MAX_TEACHER_COMMENT_COUNTER,
  );

  const [grades, setGrades] = useState({
    platform_01: 0,
    participation_01: 0,
    fast_test_01: 0,
    midterm: 0,
    project: 0,
    platform_02: 0,
    participation_02: 0,
    fast_test_02: 0,
    final_exam: 0,
  });
  const [finalGrade, setFinalGrade] = useState(0);
  const [finalGradeColor, setFinalGradeColor] = useState(
    'base-color-final-grade',
  );

  const onCalculateGrades = (name, value) => {
    const currentGrades = { ...grades };
    currentGrades[name] = value * ADULTS_GRADES[name];

    let fGrade = 0;

    for (let i in currentGrades) {
      fGrade += Number(currentGrades[i]);
    }

    setGrades(currentGrades);
    setFinalGrade(Math.floor(fGrade));
    determineFinalGradeColor(fGrade);
  };

  const onBlurHandler = (e) => {
    const { name, value } = e.target;

    if (value === '') {
      onCalculateGrades(name, 0);
      return;
    }

    onCalculateGrades(name, value);
  };

  const determineFinalGradeColor = (grade) => {
    if (grade >= 1 && grade <= 75) {
      setFinalGradeColor('failed-final-grade');
    } else if (grade >= 76 && grade <= 90) {
      setFinalGradeColor('medium-final-grade');
    } else {
      setFinalGradeColor('success-final-grade');
    }
  };

  const onCommentsChangeHandler = (e) => {
    if (e.target.value.length >= 101) return;

    setComentsCounter(MAX_TEACHER_COMMENT_COUNTER - e.target.value.length);
  };

  const onGenerateStudentPPT = async (data) => {
    const response = await fetch('/templates/adults_score_report.pptx');
    const content = await response.arrayBuffer();

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    doc.render(data);

    const out = doc.getZip().generate({
      type: 'blob',
      mimeType:
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    });

    saveAs(out, `${data.student}_Report.pptx`);

    setFinalGrade(0);
    setGrades({
      platform_01: 0,
      participation_01: 0,
      fast_test_01: 0,
      midterm: 0,
      project: 0,
      platform_02: 0,
      participation_02: 0,
      fast_test_02: 0,
      final_exam: 0,
    });
    setFinalGradeColor('base-color-final-grade');
    setComentsCounter(MAX_TEACHER_COMMENT_COUNTER);
    reset({
      ...getValues(),
      student: '',
      platform_01: '',
      participation_01: '',
      fast_test_01: '',
      midterm: '',
      project: '',
      platform_02: '',
      participation_02: '',
      fast_test_02: '',
      comments: '',
      final_exam: '',
    });
  };

  const onSubmitForm = handleSubmit((data) => {
    const ultimateGrades = {
      ...data,
      date: customDate(data.date),
      final_grade: finalGrade,
    };
    onGenerateStudentPPT(ultimateGrades);
  });

  return (
    <section className="main-section">
      <div className="wrapper">
        <form className="grades-form" onSubmit={onSubmitForm}>
          <h1>Adults grades</h1>
          <div className="input-group">
            <div className="input-element">
              <label htmlFor="level">Level</label>
              <input
                type="text"
                name="level"
                id="level"
                placeholder="Add the level here"
                autoComplete="off"
                {...register('level', {
                  required: {
                    value: true,
                    message: 'The level is required',
                  },
                })}
              />
              {errors.level && (
                <p className="form-error">{errors.level.message}</p>
              )}
            </div>
            <div className="input-element">
              <label htmlFor="teacher">Teacher</label>
              <input
                type="text"
                name="teacher"
                id="teacher"
                placeholder="Teacher's name here"
                autoComplete="off"
                {...register('teacher', {
                  required: {
                    value: true,
                    message: 'Name required',
                  },
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Only letters allowed',
                  },
                })}
              />
              {errors.teacher && (
                <p className="form-error">{errors.teacher.message}</p>
              )}
            </div>
          </div>
          <div className="input-group">
            <div className="input-element">
              <label htmlFor="student">Student name</label>
              <input
                type="text"
                name="student"
                id="student"
                placeholder="Student's name here"
                autoComplete="off"
                {...register('student', {
                  required: {
                    value: true,
                    message: 'Name required',
                  },
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Only letters allowed',
                  },
                })}
              />
              {errors.student && (
                <p className="form-error">{errors.student.message}</p>
              )}
            </div>

            <div className="input-element">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                {...register('date', {
                  required: {
                    value: true,
                    message: 'Date required',
                  },
                })}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-element">
              <label htmlFor="platform_01">Platform 01 (5%)</label>
              <input
                type="number"
                name="platform_01"
                id="platform_01"
                autoComplete="off"
                {...register('platform_01', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.platform_01 && (
                <p className="form-error">{errors.platform_01.message}</p>
              )}
            </div>
            <div className="input-element">
              <label htmlFor="participation_01">Participation 01 (5%)</label>
              <input
                type="number"
                name="participation_01"
                id="participation_01"
                autoComplete="off"
                {...register('participation_01', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.participation_01 && (
                <p className="form-error">{errors.participation_01.message}</p>
              )}
            </div>
            <div className="input-element">
              <label htmlFor="fast_test_01">Fast test 01 (5%)</label>
              <input
                type="number"
                name="fast_test_01"
                id="fast_test_01"
                autoComplete="off"
                {...register('fast_test_01', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.fast_test_01 && (
                <p className="form-error">{errors.fast_test_01.message}</p>
              )}
            </div>
          </div>
          <div className="input-group">
            <div className="input-element">
              <label htmlFor="midterm">Midterm (25%)</label>
              <input
                type="number"
                name="midterm"
                id="midterm"
                autoComplete="off"
                {...register('midterm', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.midterm && (
                <p className="form-error">{errors.midterm.message}</p>
              )}
            </div>
            <div className="input-element">
              <label htmlFor="project">Project (10%)</label>
              <input
                type="number"
                name="project"
                id="project"
                autoComplete="off"
                {...register('project', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.project && (
                <p className="form-error">{errors.project.message}</p>
              )}
            </div>
            <div className="input-element">
              <label htmlFor="platform_02">Platform 02 (5%)</label>
              <input
                type="number"
                name="platform_02"
                id="platform_02"
                autoComplete="off"
                {...register('platform_02', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.platform_02 && (
                <p className="form-error">{errors.platform_02.message}</p>
              )}
            </div>
          </div>
          <div className="input-group">
            <div className="input-element">
              <label htmlFor="participation_02">Participation 02 (5%)</label>
              <input
                type="number"
                name="participation_02"
                id="participation_02"
                autoComplete="off"
                {...register('participation_02', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.participation_02 && (
                <p className="form-error">{errors.participation_02.message}</p>
              )}
            </div>
            <div className="input-element">
              <label htmlFor="fast_test_02">Fast test 02 (5%)</label>
              <input
                type="number"
                name="fast_test_02"
                id="fast_test_02"
                autoComplete="off"
                {...register('fast_test_02', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.fast_test_02 && (
                <p className="form-error">{errors.fast_test_02.message}</p>
              )}
            </div>
            <div className="input-element">
              <label htmlFor="final_exam">Final exam (35%)</label>
              <input
                type="number"
                name="final_exam"
                id="final_exam"
                autoComplete="off"
                {...register('final_exam', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  min: {
                    value: 0,
                    message: 'negative numbers are not allowed',
                  },
                  max: {
                    value: 100,
                    message: '100 is the maximum',
                  },
                  onBlur: (e) => onBlurHandler(e),
                })}
              />
              {errors.final_exam && (
                <p className="form-error">{errors.final_exam.message}</p>
              )}
            </div>
          </div>
          <div className="input-group">
            <div className="input-element">
              <label htmlFor="comments">Teacher's comments</label>
              <div className="max-counter-wrapper">
                Maxima cantidad: <span>{commentsCounter}</span>
              </div>
              <textarea
                cols={5}
                rows={5}
                name="comments"
                id="comments"
                {...register('comments', {
                  required: {
                    value: true,
                    message: 'Please add some comments',
                  },
                  onChange: (e) => onCommentsChangeHandler(e),
                })}
                maxLength={MAX_TEACHER_COMMENT_COUNTER}
              />
              {errors.comments && (
                <p className="form-error">{errors.comments.message}</p>
              )}
            </div>
          </div>
          <p>
            Final grade: <span className={finalGradeColor}>{finalGrade}</span>
          </p>
          <div className="form-btn">
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdultGrades;
