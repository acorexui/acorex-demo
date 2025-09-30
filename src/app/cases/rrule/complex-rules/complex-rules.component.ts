import { AXRruleComponent } from '@acorex/components/rrule';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'complex-rules.component.html',
  imports: [AXRruleComponent],
})
export class ComplexRulesComponent {
  selectedRule = signal<string>('business-days');
  generatedDates = signal<Date[]>([]);
  rruleString = signal<string>(
    'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYWEEKDAY=MO,TU,WE,TH,FR;COUNT=10'
  );

  complexRules = [
    {
      id: 'business-days',
      name: 'Business Days Only',
      description: 'Every weekday (Monday to Friday)',
      rule: 'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYWEEKDAY=MO,TU,WE,TH,FR;COUNT=10',
    },
    {
      id: 'weekends',
      name: 'Weekends Only',
      description: 'Every Saturday and Sunday',
      rule: 'RRULE:FREQ=WEEKLY;INTERVAL=1;WKST=MO;BYWEEKDAY=SA,SU;COUNT=8',
    },
    {
      id: 'monthly-first-last',
      name: 'First and Last Day of Month',
      description: 'First and last day of each month',
      rule: 'RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1,-1;COUNT=12',
    },
    {
      id: 'quarterly',
      name: 'Quarterly',
      description: 'Every 3 months on the 15th',
      rule: 'RRULE:FREQ=MONTHLY;INTERVAL=3;BYMONTHDAY=15;COUNT=4',
    },
    {
      id: 'yearly-anniversary',
      name: 'Yearly Anniversary',
      description: 'Same date every year',
      rule: 'RRULE:FREQ=YEARLY;INTERVAL=1;COUNT=5',
    },
    {
      id: 'bi-weekly',
      name: 'Bi-weekly',
      description: 'Every other week on Tuesday and Thursday',
      rule: 'RRULE:FREQ=WEEKLY;INTERVAL=2;WKST=MO;BYWEEKDAY=TU,TH;COUNT=10',
    },
    {
      id: 'monthly-multiple',
      name: 'Monthly Multiple Days',
      description: '1st, 15th, and last day of each month',
      rule: 'RRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1,15,-1;COUNT=12',
    },
    {
      id: 'yearly-seasonal',
      name: 'Seasonal (Spring/Fall)',
      description: 'March 20th and September 22nd each year',
      rule: 'RRULE:FREQ=YEARLY;INTERVAL=1;BYMONTH=3,9;BYMONTHDAY=20,22;COUNT=6',
    },
  ];

  onRruleChange(rrule: any) {
    if (rrule) {
      try {
        const dates = rrule.all();
        this.generatedDates.set(dates);
      } catch (error) {
        console.error('Error generating dates:', error);
        this.generatedDates.set([]);
      }
    }
  }

  onStringChange(value: string | null) {
    if (value) {
      this.rruleString.set(value);
    }
  }

  selectRule(ruleId: string) {
    const rule = this.complexRules.find((r) => r.id === ruleId);
    if (rule) {
      this.selectedRule.set(ruleId);
      this.rruleString.set(rule.rule);
    }
  }

  getSelectedRule() {
    return this.complexRules.find((r) => r.id === this.selectedRule());
  }

  getRuleDescription(): string {
    const rule = this.getSelectedRule();
    return rule ? rule.description : '';
  }
}

