import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import connect from './connect'
import { updateStepper } from './utils'
import './stepper.scss'

const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
        position: 'fixed',
        top: 65,
        zIndex: 2
    },
    stepper: {
        backgroundColor: '#2554AD'
    },
    iconRoot: {
        backgroundColor: 'white',
        borderRadius: '50%',
    },
    iconCompleted: {
        backgroundColor: 'white',
        color: '#69DB4D !important'
    },
    label: {
        color: 'white !important',
        opacity: 0.44,
        fontFamily: 'Helvetica',
        fontSize: 14,
    },
    labelActive: {
        opacity: 1,
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Mechanical Properties', 'Operational Properties', 'Water Origin', 'Operation Costs',
        'Enironmental Data', 'Customer\'s problems and requests', 'Water Analysis', 'Thermodynamic Calculations'];
}

// function getStepContent(step) {
//     switch (step) {
//         case 0:
//             return 'Select campaign settings...';
//         case 1:
//             return 'What is an ad group anyways?';
//         case 2:
//             return 'This is the bit I really care about!';
//         default:
//             return 'Unknown step';
//     }
// }

function HorizontalLinearStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState([]);
    const steps = getSteps();
    const { tablesData } = props
    // console.log('stepper tablesData', tablesData);
    console.log('skipped', skipped);
    // if (tablesData.d8) {
    //     setActiveStep(5)
    // }

    useEffect(() => {
        updateStepper(tablesData, skipped, setSkipped, setActiveStep)
    }, [Object.values(tablesData)])



    const isStepOptional = (step, label) => {
        return step === 1;
    };

    const isStepSkipped = step => {
        return skipped.includes(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index, label)) {
                        // labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label}  {...stepProps} classes={{ completed: classes.completed }}>
                            <StepLabel
                                classes={{
                                    root: classes.rootlabel,
                                    label: classes.label,
                                    active: classes.labelActive,
                                }}
                                StepIconProps={{
                                    classes: {
                                        root: classes.iconRoot,
                                        completed: classes.iconCompleted,
                                    }
                                }}
                                {...labelProps}>
                                {label}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {/* here long text */}

            </div>
        </div >
    );
}

export default connect(HorizontalLinearStepper)


{/* {activeStep === steps.length
                    ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
            </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
              </Button>
                                {isStepOptional(activeStep) && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleSkip}
                                        className={classes.button}
                                    >
                                        Skip
                </Button>
                                )}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )} */}