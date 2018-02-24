import {Injectable} from '@angular/core';
@Injectable()
export class BankList
{
	public list = [
					'Allahabad Bank',
					'Axis Bank',
					'Canara Bank',
					'City Union Bank',
					'Dhanalaxmi Bank',
					'Federal Bank',
					'HDFC Bank',
					'ICICI Bank',
					'IDBI Bank',
					'Indian Bank',
					'IndusInd Bank',
					'Indian Overseas Bank',
					'Karnataka Bank',
					'Karur Vysya Bank',
					'Laxmi Vilas Bank',
					'Punjab National Bank',
					'State Bank of India',
					'South Indian Bank',
					'Tamilnadu Mercantile Bank',
					'Vijaya Bank',
					'Yes Bank',
					];
}

export class YearList
{
	private y = new Date();
	private y1 = this.y.getFullYear();
	public years=['2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031'
								,'2031','2032','2033','2034','2035','2036','2037','2038','2039','2040','2041','2042','2043','2044'
								,'2045','2046','2047','2048','2049','2050'];
	// public years()
	// {
	// 	for (var i = this.y1; i < (this.y1+30); i++)
	// 	{
	// 		this.year.push(i);
	// 	}
	// 	return this.year;
	// }

}