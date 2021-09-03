"use strict";

/**
 * Please, implement a function accountPatients that takes a count of free beds in a hospital and returns two functions:
 * the first one for adding a patient
 * the second one for discharging a patient
 * accountPatients should keep track of free beds in a hospital and every time when a patient is admitted or discharged,
 * print the count to the console like in examples:
 *
 * A patient was discharged, 54 beds are available
 * A patient was admitted, 34 beds are available
 *
 * When there are no beds available,
 * Can not admit a patient, no beds available should be printed
 * When there is an attempt to discharge a patient when there are no patients,
 * There are no patients to discharge should be printed
 */

const accountPatients = function (countBeds) {
  let pacient = 0;

  const admitPacient = () => {
    if (pacient + 1 > countBeds) {
      console.log("Can not admit a patient, no beds available");
      return;
    }
    pacient += 1;
    console.log(
      `A patient was admitted, ${countBeds - pacient} beds are available`
    );
  };
  const dischargPacient = () => {
    if (pacient <= 0) {
      console.log("There are no patients to discharge");
      return;
    }

    pacient -= 1;
    console.log(
      `A patient was discharged, ${countBeds - pacient} beds are available`
    );
  };

  return [admitPacient, dischargPacient];
};

const [admit, discharge] = accountPatients(100);
admit();
admit();
admit();
discharge();
discharge();
discharge();
discharge();
