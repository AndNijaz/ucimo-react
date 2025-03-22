import Form from "../../ui/Form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { getSettings } from "../../services/apiSettings";
import styled from "styled-components";
import useSettings from "./useSettings";
import { useForm } from "react-hook-form";
import useUpdateSettings from "./useUpdateSettings";

function UpdateSettingsForm() {
  const FormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;

    padding: 1.2rem 0;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-100);
    }

    &:has(button) {
      display: flex;
      justify-content: flex-end;
      gap: 1.2rem;
    }
  `;

  const Label = styled.label`
    font-weight: 500;
  `;

  const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
  `;

  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLenght,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    error,
  } = useSettings();
  // console.log(settings);

  const { updateSetting, isUpdating } = useUpdateSettings();

  function updateSettings(e, field) {
    const value = e.target.value;
    console.log(value);
    if (!value) return;

    updateSetting([field], e.target.value);
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => updateSettings(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLenght}
          onBlur={(e) => updateSettings(e, "maxBookingLenght")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => updateSettings(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => updateSettings(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
