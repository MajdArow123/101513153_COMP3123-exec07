import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentInfo from './components/StudentInfo';

function App() {
  // STATE: the information to display is stored in the App component's state
  // using the useState hook (one object holding all five values).
  const [info] = useState({
    title: 'Welcome to Fullstack Development - I',
    subtitle: 'React JS Programming Week09 Lab exercise',
    studentId: '101513153',
    studentName: 'Mjd Arow',
    college: 'George Brown College, Toronto',
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* PROPS: the values from state are passed down to the
            StudentInfo component as props. */}
        <StudentInfo
          title={info.title}
          subtitle={info.subtitle}
          studentId={info.studentId}
          studentName={info.studentName}
          college={info.college}
        />
      </header>
    </div>
  );
}

export default App;
