import dayjs from "dayjs"

export function getFormErrorText(params) {
    // We are using object destructuring because we don't want to introduce a bug/regression whenever
    // a developer adds a new input and accidentally changes the order of the arguments.
    // Now, we only have a single argument (an object) and take advantage of object destructuring
    // such that the order is irrelevant
    const { visitDateValue, referralIdValue, medicareValue, visitTypeValue } = params // prettier-ignore

    if (!medicareValue) {
        return "Missing medicare value. Claim not saved."
    }

    if (visitTypeValue === "consultation" && !referralIdValue) {
        return "Missing referral ID value. Claim not saved."
    }

    if (!visitDateValue) {
        return "Missing date. Claim not saved."
    }

    if (visitDateValue.isAfter(dayjs())) {
        return "Date cannot be in the future. Claim not saved."
    }

    if (!visitTypeValue) {
        return "Missing visit type. Claim not saved."
    }

    return ""
}
