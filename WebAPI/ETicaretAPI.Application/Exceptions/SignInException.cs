using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Exceptions
{
    public class SignInException : Exception
    {
        public SignInException():base("Email wrong")
        {
        }

        public SignInException(string? message) : base(message)
        {
        }

        public SignInException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected SignInException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
