import {useEffect, useRef, useState} from 'react';
import {FaMicrophoneLines} from 'react-icons/fa6';


const SpeechToText = () => {
  const [isListening, setListening] = useState (false);
  const [transcript, setTranscript] = useState ('');
  const recognitionRef = useRef (null);

  // Check whether web speech is supported by the browser
  useEffect (() => {
    if (!('webkitSpeechRecognition' in window)) {
      console.log ('WebkitSpeech not supported');
      return;
    }

    recognitionRef.current = new window.webkitSpeechRecognition ();
    const recognition = recognitionRef.current;
    const options = {interimResults: true, lang: 'en-US', continuous: false};

    recognition.interimResults = options.interimResults;
    recognition.lang = options.lang;
    recognition.continuous = options.continuous;

    if ('webkitSpeechGrammarList' in window) {
      const grammar =
        '#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | ; | : ;';
      const speechRecognitionList = new window.webkitSpeechGrammarList ();
      speechRecognitionList.addFromString (grammar, 1);
      recognition.grammars = speechRecognitionList;
    }

    recognition.onresult = event => {
      let text = '';
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript (text);
    };

    recognition.onerror = event => {
      console.log ('Speech Recognition error', event);
    };

    recognition.onend = () => {
      setListening (false);
    };

    return () => {
      recognition.stop ();
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start ();
      setListening (true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop ();
      setListening (false);
    }
  };

  return (
    <div className='flex justify-center items-center space-x-5'>
      <button onClick={startListening} disabled={isListening}>
        <FaMicrophoneLines className='text-black'/>
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        <FaMicrophoneLines className='text-red'/>
      </button>
      <div>{transcript}</div>
    </div>
  );
};

export default SpeechToText;
