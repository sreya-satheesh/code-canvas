export type Lesson = {
  id: number;
  title: string;
  introduction: string;
  explanation: string;
  prompt: string;
  starterCode: string;
  solution: string;
  icon: React.ElementType;
};

export type Progress = {
  completedLessons: number[];
  userCode: { [lessonId: number]: string };
};
