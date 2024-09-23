import profile from '../../img/favicon/favicon-32x32.png';
 
//<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

const ListTestComponent: React.FC = () => {
    return (
        <ul className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8" src={ profile } alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-indigo-600 truncat">
                        Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default ListTestComponent;
    
