import { Component, inject } from '@angular/core';
import { QuizService } from '../features/quiz/services/quiz.service';

@Component({
  selector: 'app-flash-card',
  imports: [],
  templateUrl: './flash-card.html',
  styleUrl: './flash-card.css',
})
export class FlashCard {
  private quizService = inject(QuizService);
  questions = this.quizService.getQuestions(); 

  currentIndex = 0;
  isFlipped = false;

  get progress(): number {
    return ((this.currentIndex + 1) / this.questions.length) * 100;
  }

  nextCard() {
    if (this.currentIndex < this.questions.length - 1) {
      this.isFlipped = false;
      this.currentIndex++;
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.isFlipped = false;
      this.currentIndex--;
    }
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
