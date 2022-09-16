import BusinessDetailForm from "@/pages/forms/wizard/BusinessDetailForm";
import Completed from "@/pages/forms/wizard/Completed";
import ProjectInfoForm from "@/pages/forms/wizard/ProjectInfoForm";
import ProjectTypeForm from "@/pages/forms/wizard/ProjectTypeForm";
import TeamSettingsForm from "@/pages/forms/wizard/TeamSettingsForm";
import PageNextIcon from "@rsuite/icons/PageNext";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import React, {useState} from "react";
import {Divider, IconButton, Stack, Steps} from "rsuite";

const forms = [ProjectTypeForm, ProjectInfoForm, TeamSettingsForm, BusinessDetailForm, Completed];

const Training = () => {
    const [step, setStep] = useState(0);
    const Form = forms[step];

    return (<div>
            <Steps current={step}>
                <Steps.Item title="Project Type"/>
                <Steps.Item title="Project Info"/>
                <Steps.Item title="Team settings"/>
                <Steps.Item title="Business Info"/>
                <Steps.Item title="Completed"/>
            </Steps>

            <Divider />

            <Form />

            <Stack justifyContent="space-between">
                {step !== 0 && (
                    <IconButton icon={<PagePreviousIcon />} onClick={() => setStep(Math.max(step - 1, 0))}>
                        Back
                    </IconButton>
                )}

                {step !== forms.length - 1 && (
                    <IconButton
                        icon={<PageNextIcon />}
                        placement="right"
                        appearance="primary"
                        onClick={() => setStep(Math.min(step + 1, 4))}
                    >
                        Continue
                    </IconButton>
                )}
            </Stack>
        </div>
    )
}
export default Training;