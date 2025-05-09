using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessObjects
{
    public class AccountDAO
    {
        public static AccountMember GetAccountById(string accountID)
        {
            using var context = new MyStoreDbContext();
            return context.AccountMembers.FirstOrDefault(x => x.MemberId.Equals(accountID));
        }
    }
}
