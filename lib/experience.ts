interface MasterExperience {
  name: string;
  startDate: string; // Format: 'YYYY-MM-DD'
}

export const masterStartDates: MasterExperience[] = [
  {
    name: 'Валентина Антоненко',
    startDate: '1980-02-01',
  },
  {
    name: 'Сабо Артем',
    startDate: '2016-04-01',
  },
  {
    name: 'Валерія Мельниченко',
    startDate: '2021-06-01',
  },
  {
    name: 'Юлія Броварчук',
    startDate: '2016-06-01',
  },
  {
    name: 'Ольга Колле',
    startDate: '2017-03-01',
  },
  {
    name: 'Анастасія Мальчик',
    startDate: '2024-01-01',
  },
  {
    name: 'Вікторія Омельченко',
    startDate: '2019-05-01',
  },
  {
    name: 'Вікторія Салій',
    startDate: '2019-05-01',
  },
  {
    name: 'Діана Лєканцева',
    startDate: '2024-05-01',
  },
  {
    name: 'Ярослава Гурбік',
    startDate: '2021-04-01',
  },
  {
    name: 'Анастасія Кузьменко',
    startDate: '2013-04-01',
  },
];

export function calculateExperience(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();

  const diffYears = now.getFullYear() - start.getFullYear();
  const diffMonths = now.getMonth() - start.getMonth();

  let totalMonths = diffYears * 12 + diffMonths;

  // Если прошло меньше года
  if (totalMonths < 12) {
    if (totalMonths === 0) {
      return 'менше року';
    }
    return `${totalMonths} ${getMonthWord(totalMonths)}`;
  }

  // Если прошло больше года
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  if (remainingMonths === 0) {
    return `${years} ${getYearWord(years)}`;
  }

  return `${years}.${remainingMonths} ${getYearWord(years)}`;
}

function getYearWord(years: number): string {
  if (years === 1) return 'років';
  if (years >= 2 && years <= 4) return 'роки';
  return 'років';
}

function getMonthWord(months: number): string {
  if (months === 1) return 'місяць';
  if (months >= 2 && months <= 4) return 'місяці';
  return 'місяців';
}

export function getMasterExperience(masterName: string): string {
  const master = masterStartDates.find((m) => m.name === masterName);
  if (!master) return 'невідомо';
  return calculateExperience(master.startDate);
}
