import LinearStepper from './Components/LinearStepper';
import { CssBaseline,Container,Box, Paper } from '@material-ui/core'
function App() {
  return (
    <>
    <CssBaseline/>
    <Container component={Box} maxWidth="md" p={3}>
      <Paper component={Box} p={3}>
    <LinearStepper/>
    </Paper>
</Container>
</>
);
};

export default App;
