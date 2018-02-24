export class PsycheQuestion {
    id: number;
    testId: number;
    order: number;
    questionName: string;
    questionBody: string;
    psycheAnswers: PsycheAnswer[] = [];
}
