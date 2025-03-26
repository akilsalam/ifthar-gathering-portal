
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Check, X, Code, Database, Server, Globe, BrainCircuit } from 'lucide-react';

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

  const questions: Question[] = [
    {
      id: 1,
      text: "What does the 'M' in MERN stand for?",
      options: ["MySQL", "MongoDB", "Microsoft", "Machine Learning"],
      correctAnswer: 1,
      icon: <Database className="h-8 w-8 text-iftar-gold" />
    },
    {
      id: 2,
      text: "Which of these is used for server-side JavaScript?",
      options: ["Express.js", "React.js", "Bootstrap", "jQuery"],
      correctAnswer: 0,
      icon: <Server className="h-8 w-8 text-iftar-gold" />
    },
    {
      id: 3,
      text: "What does the 'R' in MERN stand for?",
      options: ["Ruby", "REST", "React", "Redux"],
      correctAnswer: 2,
      icon: <Code className="h-8 w-8 text-iftar-gold" />
    },
    {
      id: 4,
      text: "What is Node.js?",
      options: ["A database", "A front-end framework", "A JavaScript runtime", "An operating system"],
      correctAnswer: 2,
      icon: <Globe className="h-8 w-8 text-iftar-gold" />
    },
    {
      id: 5,
      text: "Which of these is NOT part of the MERN stack?",
      options: ["MongoDB", "Express.js", "Redux", "Node.js"],
      correctAnswer: 2,
      icon: <BrainCircuit className="h-8 w-8 text-iftar-gold" />
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
    <section id="mern-quiz" className="py-20 px-6 bg-white">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="text-sm font-medium text-iftar-gold mb-4 uppercase tracking-wider">MERN Stack Quiz</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-iftar-navy">
            Prove Your Tech Knowledge
          </h3>
          <p className="text-iftar-navy/80 max-w-2xl mx-auto">
            Want to join the Ifthar? Show off your MERN stack knowledge first! (Don't worry, we're just having fun - everyone's invited regardless of your score!)
          </p>
        </div>

        {!isSubmitted ? (
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto fade-in-section">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-iftar-navy/60">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <div className="flex space-x-1">
                {questions.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-8 rounded-full ${
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
            
            <div className="mb-8 flex items-center space-x-4">
              <div className="bg-iftar-light-gold p-4 rounded-full">
                {currentQuestion.icon}
              </div>
              <h4 className="text-xl font-medium text-iftar-navy">{currentQuestion.text}</h4>
            </div>
            
            <RadioGroup 
              value={selectedAnswers[currentQuestionIndex]?.toString() || ""}
              onValueChange={handleAnswerSelect} 
              className="space-y-3 mb-8"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-iftar-gold/20 hover:border-iftar-gold/50 transition-colors">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} className="text-iftar-gold" />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer font-normal text-iftar-navy">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="flex justify-between pt-4 border-t border-iftar-gold/10">
              <Button
                variant="outline"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="border-iftar-gold/30 text-iftar-navy hover:bg-iftar-light-gold"
              >
                Previous
              </Button>
              
              {isLastQuestion ? (
                <Button
                  onClick={handleSubmitQuiz}
                  disabled={!allQuestionsAnswered}
                  className="bg-iftar-gold hover:bg-iftar-deep-gold text-white"
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  disabled={!isAnswered}
                  className="bg-iftar-gold hover:bg-iftar-deep-gold text-white"
                >
                  Next Question
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto text-center fade-in-section">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
              score >= 4 ? 'bg-green-100' : 'bg-amber-100'
            }`}>
              {score >= 4 ? (
                <Check className="h-8 w-8 text-green-600" />
              ) : (
                <X className="h-8 w-8 text-amber-600" />
              )}
            </div>
            
            <h4 className="text-2xl font-semibold text-iftar-navy mb-4">
              {score >= 4 ? 'Excellent MERN Knowledge!' : 'Almost there!'}
            </h4>
            
            <p className="text-iftar-navy/80 mb-6">
              You scored <span className="font-semibold">{score}/5</span> on the MERN stack quiz.
              {score >= 4 
                ? " You're definitely a tech wizard! See you at the Ifthar gathering!" 
                : " Keep learning! But don't worry, you're still invited to the Ifthar!"}
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-8 text-left">
              {questions.map((question, index) => (
                <div key={question.id} className="flex items-start space-x-3">
                  {selectedAnswers[index] === question.correctAnswer ? (
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-iftar-navy">{question.text}</p>
                    <p className="text-xs text-iftar-navy/70">
                      Your answer: <span className={selectedAnswers[index] === question.correctAnswer ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                        {question.options[selectedAnswers[index]]}
                      </span>
                    </p>
                    {selectedAnswers[index] !== question.correctAnswer && (
                      <p className="text-xs text-green-600">
                        Correct answer: <span className="font-medium">{question.options[question.correctAnswer]}</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-iftar-gold/30 text-iftar-navy hover:bg-iftar-light-gold mr-4"
            >
              Take Again
            </Button>
            
            <Button 
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-iftar-gold hover:bg-iftar-deep-gold text-white"
            >
              Back to RSVP
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MERNQuizSection;
