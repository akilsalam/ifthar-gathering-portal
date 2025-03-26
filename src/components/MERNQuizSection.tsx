
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Check, X, Code, Database, Server, Globe, BrainCircuit } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  icon: React.ReactNode;
};

const MERNQuizSection: React.FC = () => {
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const isMobile = useIsMobile();

  const questions: Question[] = [
    {
      id: 1,
      text: "What does the 'M' in MERN stand for?",
      options: ["MySQL", "MongoDB", "Microsoft", "Machine Learning"],
      correctAnswer: 1,
      icon: <Database className="h-6 w-6 md:h-8 md:w-8 text-iftar-gold" />
    },
    {
      id: 2,
      text: "Which of these is used for server-side JavaScript?",
      options: ["Express.js", "React.js", "Bootstrap", "jQuery"],
      correctAnswer: 0,
      icon: <Server className="h-6 w-6 md:h-8 md:w-8 text-iftar-gold" />
    },
    {
      id: 3,
      text: "What does the 'R' in MERN stand for?",
      options: ["Ruby", "REST", "React", "Redux"],
      correctAnswer: 2,
      icon: <Code className="h-6 w-6 md:h-8 md:w-8 text-iftar-gold" />
    },
    {
      id: 4,
      text: "What is Node.js?",
      options: ["A database", "A front-end framework", "A JavaScript runtime", "An operating system"],
      correctAnswer: 2,
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8 text-iftar-gold" />
    },
    {
      id: 5,
      text: "Which of these is NOT part of the MERN stack?",
      options: ["MongoDB", "Express.js", "Redux", "Node.js"],
      correctAnswer: 2,
      icon: <BrainCircuit className="h-6 w-6 md:h-8 md:w-8 text-iftar-gold" />
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = parseInt(answer);
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let newScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        newScore++;
      }
    });
    
    setScore(newScore);
    setIsSubmitted(true);
    
    if (newScore >= 4) {
      toast({
        title: "Congratulations!",
        description: `You scored ${newScore}/5! You're officially invited to the Ifthar gathering!`,
      });
    } else {
      toast({
        title: "Almost there!",
        description: `You scored ${newScore}/5. Brush up on your MERN stack knowledge! (But you're still invited!)`,
        variant: "destructive",
      });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const allQuestionsAnswered = selectedAnswers.filter(a => a !== undefined).length === questions.length;

  return (
    <section id="mern-quiz" className="py-12 md:py-20 px-4 md:px-6 bg-white">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12 fade-in-section">
          <h2 className="text-sm font-medium text-iftar-gold mb-3 md:mb-4 uppercase tracking-wider">MERN Stack Quiz</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-4 md:mb-6 text-iftar-navy">
            Prove Your Tech Knowledge
          </h3>
          <p className="text-iftar-navy/80 max-w-2xl mx-auto text-sm md:text-base">
            Want to join the Ifthar? Show off your MERN stack knowledge first! (Don't worry, we're just having fun - everyone's invited regardless of your score!)
          </p>
        </div>

        {!isSubmitted ? (
          <div className="glass-card p-4 md:p-8 rounded-xl max-w-2xl mx-auto fade-in-section">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-medium text-iftar-navy/60">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <div className="flex space-x-1">
                {questions.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1.5 md:h-2 w-4 md:w-8 rounded-full ${
                      index === currentQuestionIndex 
                        ? 'bg-iftar-gold' 
                        : selectedAnswers[index] !== undefined 
                          ? 'bg-iftar-gold/40' 
                          : 'bg-iftar-gold/10'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="mb-6 md:mb-8 flex items-center space-x-3 md:space-x-4">
              <div className="bg-iftar-light-gold p-3 md:p-4 rounded-full">
                {currentQuestion.icon}
              </div>
              <h4 className={`text-base md:text-xl font-medium text-iftar-navy ${isMobile ? 'mr-2' : ''}`}>
                {currentQuestion.text}
              </h4>
            </div>
            
            <RadioGroup 
              value={selectedAnswers[currentQuestionIndex]?.toString() || ""}
              onValueChange={handleAnswerSelect} 
              className="space-y-2 md:space-y-3 mb-6 md:mb-8"
            >
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-2.5 md:p-3 rounded-lg border border-iftar-gold/20 hover:border-iftar-gold/50 transition-colors"
                >
                  <RadioGroupItem 
                    value={index.toString()} 
                    id={`option-${index}`} 
                    className="text-iftar-gold" 
                  />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer font-normal text-iftar-navy text-sm md:text-base"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="flex justify-between pt-3 md:pt-4 border-t border-iftar-gold/10">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="border-iftar-gold/30 text-iftar-navy hover:bg-iftar-light-gold text-xs md:text-sm h-9 md:h-10"
              >
                Previous
              </Button>
              
              {isLastQuestion ? (
                <Button
                  onClick={handleSubmitQuiz}
                  disabled={!allQuestionsAnswered}
                  className="bg-iftar-gold hover:bg-iftar-deep-gold text-white text-xs md:text-sm h-9 md:h-10"
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  disabled={!isAnswered}
                  className="bg-iftar-gold hover:bg-iftar-deep-gold text-white text-xs md:text-sm h-9 md:h-10"
                >
                  Next Question
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="glass-card p-4 md:p-8 rounded-xl max-w-2xl mx-auto text-center fade-in-section">
            <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 md:mb-6 ${
              score >= 4 ? 'bg-green-100' : 'bg-amber-100'
            }`}>
              {score >= 4 ? (
                <Check className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
              ) : (
                <X className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
              )}
            </div>
            
            <h4 className="text-xl md:text-2xl font-semibold text-iftar-navy mb-3 md:mb-4">
              {score >= 4 ? 'Excellent MERN Knowledge!' : 'Almost there!'}
            </h4>
            
            <p className="text-iftar-navy/80 mb-4 md:mb-6 text-sm md:text-base">
              You scored <span className="font-semibold">{score}/5</span> on the MERN stack quiz.
              {score >= 4 
                ? " You're definitely a tech wizard! See you at the Ifthar gathering!" 
                : " Keep learning! But don't worry, you're still invited to the Ifthar!"}
            </p>
            
            <div className="grid grid-cols-1 gap-3 md:gap-4 mb-6 md:mb-8 text-left">
              {questions.map((question, index) => (
                <div key={question.id} className="flex items-start space-x-2 md:space-x-3">
                  {selectedAnswers[index] === question.correctAnswer ? (
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <X className="h-4 w-4 md:h-5 md:w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-xs md:text-sm font-medium text-iftar-navy">{question.text}</p>
                    <p className="text-2xs md:text-xs text-iftar-navy/70">
                      Your answer: <span className={selectedAnswers[index] === question.correctAnswer ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                        {question.options[selectedAnswers[index]]}
                      </span>
                    </p>
                    {selectedAnswers[index] !== question.correctAnswer && (
                      <p className="text-2xs md:text-xs text-green-600">
                        Correct answer: <span className="font-medium">{question.options[question.correctAnswer]}</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-iftar-gold/30 text-iftar-navy hover:bg-iftar-light-gold text-xs md:text-sm h-9 md:h-10"
              >
                Take Again
              </Button>
              
              <Button 
                onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-iftar-gold hover:bg-iftar-deep-gold text-white text-xs md:text-sm h-9 md:h-10"
              >
                Back to RSVP
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MERNQuizSection;
