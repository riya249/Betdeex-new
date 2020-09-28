
export class AllCategory  {


getCategory = () =>{
  return this.categoryArray
}

getSubCategory = (index:number) =>{
  return this.subCategoryArray[index]
}

        //@ts-ignore
        categoryArray =[
            'Sports',
            'Politics',
            'Movies',
            'Tech',
            'Science',
            'Entertainment',
            'Celebrities',
            'Current',
            'Global',
            'Users Choice',
            'Market',
            'Dsbelt',
            ];
        
               //@ts-ignore
            subCategoryArray=[
                ['Football', 'Cricket', 'Baseball', 'Racing', 'Wrestling'],
                ['Good Politics', 'Dirty Politics'],
                ['English', 'Hindi', 'Marathi'],
                ['Computers', 'Electronics', 'Mechanical'],
                ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Astronomy'],
                ['Traveling','TV'],
                ['Actors', 'Actresses', 'Singers'],
                ['News', 'Issues'],
                ['Earth', 'Matters', 'Good things', 'Problems'],
                ['Career', 'Life Partner'],
                ['Stock Exchange', 'Crypto', 'Forex', 'Commodity'],
                ['White', 'Yellow', 'Orange', 'Green', 'Blue', 'Brown', 'Red', 'Black'],
              ];
        
   

}
